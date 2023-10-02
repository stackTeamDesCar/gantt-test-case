import React, { useState, useContext, useCallback, useEffect } from "react";
import Helmet from "react-helmet";

import { camelCase, isEmpty } from "lodash";

const isRootCSSSelector = (rule) => rule.selectorText === ":root";

const ThemeContext = React.createContext({});

export default function Theme({ name = "dark", children }) {
  const [theme, setTheme] = useState(null);
  const [themeProperties, setThemeProperties] = useState({});

  useEffect(() => {
    import(`!!css-loader!../../theme-${name}.css`).then((module) => {
      setTheme(module.default || module);
    });
  }, [name]);

  const onUpdateDOM = useCallback(
    (_, added) => {
      if (added && added.styleTags && added.styleTags.length) {
        const [style] = added.styleTags;
        const rules = Array.from(style.sheet.cssRules);
        const variablesRule = rules.find(isRootCSSSelector);

        const variablesObject = Object.values(variablesRule.style).reduce(
          (acc, property) =>
            isEmpty(property)
              ? acc
              : {
                  ...acc,
                  [camelCase(property)]: variablesRule.style
                    .getPropertyValue(property)
                    .trim(),
                },
          { theme: name }
        );

        setThemeProperties(variablesObject);
      }
    },
    [name]
  );

  return (
    <ThemeContext.Provider value={themeProperties}>
      <Helmet onChangeClientState={onUpdateDOM}>
        <style>{theme?.toString()}</style>
      </Helmet>
      {theme ? children : <p>Loading</p>}
    </ThemeContext.Provider>
  );
}

Theme.Consumer = ThemeContext.Consumer;

export function useTheme() {
  const themeProperties = useContext(ThemeContext);
  return themeProperties;
}

export function useThemeVariable(variableName, fallback) {
  const themeProperties = useContext(ThemeContext);
  return themeProperties[variableName] ?? fallback;
}
