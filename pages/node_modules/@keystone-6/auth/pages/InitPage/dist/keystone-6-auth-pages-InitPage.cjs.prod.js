'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var fetch = require('cross-fetch');
var core = require('@keystone-ui/core');
var button = require('@keystone-ui/button');
var fields = require('@keystone-ui/fields');
var context = require('@keystone-6/core/admin-ui/context');
var isDeepEqual = require('fast-deep-equal');
var apollo = require('@keystone-6/core/admin-ui/apollo');
var router = require('@keystone-6/core/admin-ui/router');
var components = require('@keystone-6/core/admin-ui/components');
var utils = require('@keystone-6/core/admin-ui/utils');
var loading = require('@keystone-ui/loading');
var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var useFromRedirect = require('../../../dist/useFromRedirect-89f2a13d.cjs.prod.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefault(fetch);
var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

const emailKeysToGuess = ['email', 'username'];
const guessEmailFromValue = value => {
  for (const key of emailKeysToGuess) {
    if (value[key] && typeof value[key].value === 'string') {
      return value[key].value;
    }
  }
}; // email validation regex from https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)

const validEmail = email => /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);

const _excluded = ["children"],
      _excluded2 = ["as"];

const Icon = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return core.jsx("a", _extends({
    css: {
      color: '#6C798F',
      // arch colors.n60
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 24,
      width: 24,
      // ':not(:first-of-type)': {
      //   marginLeft: '0.25em',
      // },
      // ':not(:last-of-type)': {
      //   marginRight: '0.25em',
      // },
      ':hover,:focus': {
        color: '#253858' // arch colors.N80,

      },
      svg: {
        width: '100%'
      }
    }
  }, props), children);
};

const IconTwitter = props => core.jsx(Icon, props, core.jsx("svg", {
  viewBox: "0 0 24 20",
  xmlns: "http://www.w3.org/2000/svg"
}, core.jsx("path", {
  d: "M7.548 20c9.056 0 14.01-7.695 14.01-14.368 0-.219 0-.437-.015-.653.964-.715 1.796-1.6 2.457-2.614a9.638 9.638 0 0 1-2.828.794A5.047 5.047 0 0 0 23.337.366a9.72 9.72 0 0 1-3.127 1.226C18.684-.072 16.258-.48 14.294.598c-1.964 1.078-2.98 3.374-2.475 5.6C7.859 5.994 4.17 4.076 1.67.922.363 3.229 1.031 6.18 3.195 7.662A4.795 4.795 0 0 1 .96 7.032v.064c0 2.403 1.653 4.474 3.95 4.95a4.797 4.797 0 0 1-2.223.087c.645 2.057 2.494 3.466 4.6 3.506A9.725 9.725 0 0 1 0 17.732a13.688 13.688 0 0 0 7.548 2.264",
  fill: "currentColor",
  fillRule: "nonzero"
})), core.jsx(A11yText, null, "Hear about KeystoneJS on Twitter"));
const IconGithub = props => core.jsx(Icon, props, core.jsx("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  "aria-hidden": "true"
}, core.jsx("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
})), core.jsx(A11yText, null, "KeystoneJS repository on GitHub")); // ==============================
// Misc
// ==============================

const A11yText = core.forwardRefWithAs((_ref2, ref) => {
  let {
    as: Tag = 'span'
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return core.jsx(Tag, _extends({
    ref: ref,
    css: {
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1
    }
  }, props));
});

/** @jsxRuntime classic */
const signupURL = 'https://signup.keystonejs.cloud/api/newsletter-signup';

const Welcome = _ref => {
  let {
    value
  } = _ref;
  const [subscribe, setSubscribe] = react.useState(false);
  const [email, setEmail] = react.useState(guessEmailFromValue(value));
  const [error, setError] = react.useState(null);
  const [loading, setLoading] = react.useState(false);
  const router$1 = router.useRouter();
  const redirect = useFromRedirect.useRedirect();

  const onSubmit = event => {
    event.preventDefault();
    setError(null); // Check if user wants to subscribe.
    // and there's a valid email address.

    if (subscribe) {
      // Basic validation check on the email?
      setLoading(true);

      if (validEmail(email)) {
        // if good add email to mailing list
        // and redirect to dashboard.
        return fetch__default["default"](signupURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: value.username,
            email,
            source: '@keystone-6/auth InitPage'
          })
        }).then(res => {
          if (res.status !== 200) {
            // We explicitly set the status in our endpoint
            // any status that isn't 200 we assume is a failure
            // which we want to surface to the user
            res.json().then(_ref2 => {
              let {
                error
              } = _ref2;
              setError(error);
              setLoading(false);
            });
          } else {
            router$1.push(redirect);
          }
        }).catch(err => {
          // network errors or failed parse
          setError(err.toString());
          setLoading(false);
        });
      } else {
        setLoading(false); // if email fails validation set error message

        setError('Email is invalid');
        return;
      }
    }

    return router$1.push(redirect);
  };

  return core.jsx(core.Stack, {
    gap: "large"
  }, core.jsx(core.Stack, {
    gap: "small",
    align: "center",
    across: true,
    css: {
      width: '100%',
      justifyContent: 'space-between'
    }
  }, core.jsx(core.H1, null, "Welcome"), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, core.jsx(IconTwitter, {
    title: "Twitter Logo"
  }), core.jsx(IconGithub, {
    href: "https://github.com/keystonejs/keystone",
    target: "_blank",
    title: "Github"
  }))), core.jsx("p", {
    css: {
      margin: 0
    }
  }, "Thanks for installing KeystoneJS. While you're getting started, check out the docs at", ' ', core.jsx("a", {
    href: "https://keystonejs.com"
  }, "keystonejs.com")), core.jsx("div", null, "If you'd like to stay up to date with the exciting things we have planned, join our mailing list (just useful announcements, no spam!)"), core.jsx("div", null, core.jsx(fields.Checkbox, {
    checked: subscribe,
    onChange: () => {
      setError(null);
      setSubscribe(!subscribe);
    }
  }, "sign up to our mailing list")), core.jsx("form", {
    onSubmit: onSubmit
  }, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: "email-field"
  }, "Email Address"), core.jsx(fields.TextInput, {
    id: "email-field",
    disabled: !subscribe,
    autoFocus: true,
    placeholder: 'Email',
    value: email,
    onChange: e => setEmail(e.target.value)
  }), core.jsx("p", {
    css: {
      color: 'red'
    }
  }, error), core.jsx(core.Inline, {
    gap: "medium",
    align: "center"
  }, core.jsx(button.Button, {
    isLoading: loading,
    type: 'submit',
    weight: "bold",
    tone: "active"
  }, error ? 'Try again' : 'Continue'), error && core.jsx(button.Button, {
    as: router.Link,
    href: '/',
    tone: "active"
  }, "Continue"))));
};

const getInitPage = props => () => core.jsx(InitPage, props);

const InitPage = _ref3 => {
  var _data$authenticate;

  let {
    fieldPaths,
    listKey,
    enableWelcome
  } = _ref3;
  const {
    adminMeta
  } = context.useKeystone();
  const fields = react.useMemo(() => {
    const fields = {};
    fieldPaths.forEach(fieldPath => {
      fields[fieldPath] = adminMeta.lists[listKey].fields[fieldPath];
    });
    return fields;
  }, [fieldPaths, adminMeta.lists, listKey]);
  const [value, setValue] = react.useState(() => {
    let state = {};
    Object.keys(fields).forEach(fieldPath => {
      state[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return state;
  });
  const invalidFields = utils.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = react.useState(false);
  const [mode, setMode] = react.useState('init');
  const [createFirstItem, {
    loading: loading$1,
    error,
    data
  }] = apollo.useMutation(apollo.gql`mutation($data: CreateInitial${listKey}Input!) {
    authenticate: createInitial${listKey}(data: $data) {
      ... on ${listKey}AuthenticationWithPasswordSuccess {
        item {
          id
        }
      }
    }
  }`);
  const reinitContext = context.useReinitContext();
  const router$1 = router.useRouter();
  const redirect = useFromRedirect.useRedirect();
  const rawKeystone = context.useRawKeystone();
  react.useEffect(() => {
    // This effect handles both cases:
    // a ) Our form submission is complete with new data
    // b ) User lands in init page due to a client side SPA redirect
    // Either way we check for an authenticated item
    if (rawKeystone.authenticatedItem.state === 'authenticated') {
      // If it exists we then check if enableWelcome is true
      // if it is then we set the mode to welcome first.
      // To tell the component to render the Welcome screen
      if (enableWelcome) {
        setMode('welcome');
      } else {
        // otherwise we route them through to the admin dashboard
        router$1.push(redirect);
      }
    }
  }, [rawKeystone.authenticatedItem, enableWelcome, router$1, redirect]);

  if (rawKeystone.authenticatedItem.state === 'authenticated' && !enableWelcome) {
    return core.jsx(core.Center, {
      fillView: true
    }, core.jsx(loading.LoadingDots, {
      label: "Loading page",
      size: "large"
    }));
  }

  return mode === 'init' ? core.jsx(useFromRedirect.SigninContainer, {
    title: "Welcome to KeystoneJS"
  }, core.jsx(core.H1, null, "Welcome to KeystoneJS"), core.jsx("p", null, "Create your first user to get started"), core.jsx("form", {
    onSubmit: event => {
      event.preventDefault(); // Check if there are any invalidFields

      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation); // if yes, don't submit the form

      if (newForceValidation) return; // If not we serialize the data

      const data = {};
      const allSerializedValues = utils.serializeValueToObjByFieldKey(fields, value);
      Object.keys(allSerializedValues).forEach(fieldPath => {
        const {
          controller
        } = fields[fieldPath];
        const serialized = allSerializedValues[fieldPath]; // we check the serialized values against the default values on the controller

        if (!isDeepEqual__default["default"](serialized, controller.serialize(controller.defaultValue))) {
          // if they're different add them to the data object.
          Object.assign(data, serialized);
        }
      }); // // Create the first item in the database.

      createFirstItem({
        variables: {
          data
        }
      }).then(() => {
        // refetch admin meta
        reinitContext();
      }).catch(() => {});
    }
  }, core.jsx(core.Stack, {
    gap: "large"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors,
    networkError: error === null || error === void 0 ? void 0 : error.networkError
  }), core.jsx(utils.Fields, {
    fields: fields,
    fieldModes: null,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(button.Button, {
    isLoading: loading$1 || (data === null || data === void 0 ? void 0 : (_data$authenticate = data.authenticate) === null || _data$authenticate === void 0 ? void 0 : _data$authenticate.__typename) === `${listKey}AuthenticationWithPasswordSuccess`,
    type: "submit",
    weight: "bold",
    tone: "active"
  }, "Get started")))) : core.jsx(useFromRedirect.SigninContainer, null, core.jsx(Welcome, {
    value: value
  }));
};

exports.getInitPage = getInitPage;
