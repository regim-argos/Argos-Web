module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'no-param-reassign': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  "settings": {
    "import/resolver": {
        "node": {
            "paths": ["src"],
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
    }
}
};
