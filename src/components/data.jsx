import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Data = (props) => {
  const [response, setResponse] = useState({ data: null, error: null });
  const [lastAttempt] = useState(Date.now());

  useEffect(() => {
    /*
     * consumer is willing to have the cached data, resolve it through cache if possible.
     */
    if (props.resolve) {
      const storageKey =
        typeof props.resolve === "string"
          ? props.resolve
          : props.resolve(props);

      if (storageKey === "*") {
        const keys = Object.keys(props.storage);

        if (keys.length !== 0) {
          const data = keys.map((key) =>
            JSON.parse(props.storage.getItem(key)),
          );
          setResponse({ data, error: null });
          return;
        }
      } else {
        const data = JSON.parse(props.storage.getItem(storageKey));

        if (data) {
          setResponse({ data, error: null });
          return;
        }
      }
    }

    if (!props.url) {
      setResponse({ data: null, error: "ERROR_UNRESOLVABLE_DATA" });
      return;
    }

    const url = typeof props.url === "string" ? props.url : props.url();

    props
      .fetch(url)
      .then((r) => r.json())
      .then((source) => (props.transform ? props.transform(source) : source))
      .then((data) => {
        if (props.cache) {
          props.cache(data).forEach(([key, entry]) => {
            props.storage.setItem(key, JSON.stringify(entry));
          });
        }

        return data;
      })
      .then((data) => setResponse({ data, error: null }))
      .catch((err) => setResponse({ data: null, error: err.message }));
  }, [lastAttempt]);

  return props.children(response.data, response.error);
};

Data.propTypes = {
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  transform: PropTypes.func,
  cache: PropTypes.func,
  resolve: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  fetch: PropTypes.func,
  storage: PropTypes.shape({
    setItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
  }),
};

Data.defaultProps = {
  fetch: window && window.fetch ? window.fetch.bind(window) : null,
  storage: localStorage,
  url: null,
  cache: null,
  transform: null,
  resolve: null,
};

export default Data;
