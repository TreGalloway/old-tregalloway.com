'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var react = require('react');
var core = require('@keystone-ui/core');
var button = require('@keystone-ui/button');
var fields = require('@keystone-ui/fields');
var notice = require('@keystone-ui/notice');
var apollo = require('@keystone-6/core/admin-ui/apollo');
var context = require('@keystone-6/core/admin-ui/context');
var router = require('@keystone-6/core/admin-ui/router');
var loading = require('@keystone-ui/loading');
var useFromRedirect = require('../../../dist/useFromRedirect-4d358803.cjs.dev.js');

const getSigninPage = props => () => core.jsx(SigninPage, props);
const SigninPage = _ref => {
  var _data$authenticate, _data$authenticate2;

  let {
    identityField,
    secretField,
    mutationName,
    successTypename,
    failureTypename
  } = _ref;
  const mutation = apollo.gql`
    mutation($identity: String!, $secret: String!) {
      authenticate: ${mutationName}(${identityField}: $identity, ${secretField}: $secret) {
        ... on ${successTypename} {
          item {
            id
          }
        }
        ... on ${failureTypename} {
          message
        }
      }
    }
  `;
  const [mode, setMode] = react.useState('signin');
  const [state, setState] = react.useState({
    identity: '',
    secret: ''
  });
  const identityFieldRef = react.useRef(null);
  react.useEffect(() => {
    var _identityFieldRef$cur;

    (_identityFieldRef$cur = identityFieldRef.current) === null || _identityFieldRef$cur === void 0 ? void 0 : _identityFieldRef$cur.focus();
  }, [mode]);
  const [mutate, {
    error,
    loading: loading$1,
    data
  }] = apollo.useMutation(mutation);
  const reinitContext = context.useReinitContext();
  const router$1 = router.useRouter();
  const rawKeystone = context.useRawKeystone();
  const redirect = useFromRedirect.useRedirect(); // This useEffect specifically handles ending up on the signin page from a SPA navigation

  react.useEffect(() => {
    if (rawKeystone.authenticatedItem.state === 'authenticated') {
      router$1.push(redirect);
    }
  }, [rawKeystone.authenticatedItem, router$1, redirect]);

  if (rawKeystone.authenticatedItem.state === 'authenticated') {
    return core.jsx(core.Center, {
      fillView: true
    }, core.jsx(loading.LoadingDots, {
      label: "Loading page",
      size: "large"
    }));
  }

  return core.jsx(useFromRedirect.SigninContainer, {
    title: "Keystone - Sign In"
  }, core.jsx(core.Stack, {
    gap: "xlarge",
    as: "form",
    onSubmit: async event => {
      event.preventDefault();

      if (mode === 'signin') {
        try {
          var _result$data$authenti;

          let result = await mutate({
            variables: {
              identity: state.identity,
              secret: state.secret
            }
          });

          if (((_result$data$authenti = result.data.authenticate) === null || _result$data$authenti === void 0 ? void 0 : _result$data$authenti.__typename) !== successTypename) {
            return;
          }
        } catch (err) {
          return;
        }

        reinitContext();
        router$1.push(redirect);
      }
    }
  }, core.jsx(core.H1, null, "Sign In"), error && core.jsx(notice.Notice, {
    title: "Error",
    tone: "negative"
  }, error.message), (data === null || data === void 0 ? void 0 : (_data$authenticate = data.authenticate) === null || _data$authenticate === void 0 ? void 0 : _data$authenticate.__typename) === failureTypename && core.jsx(notice.Notice, {
    title: "Error",
    tone: "negative"
  }, data === null || data === void 0 ? void 0 : data.authenticate.message), core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: "identity"
  }, identityField), core.jsx(fields.TextInput, {
    id: "identity",
    name: "identity",
    value: state.identity,
    onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
      identity: e.target.value
    })),
    placeholder: identityField,
    ref: identityFieldRef
  }), mode === 'signin' && core.jsx(react.Fragment, null, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: "password"
  }, secretField), core.jsx(fields.TextInput, {
    id: "password",
    name: "password",
    value: state.secret,
    onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
      secret: e.target.value
    })),
    placeholder: secretField,
    type: "password"
  }))), mode === 'forgot password' ? core.jsx(core.Stack, {
    gap: "medium",
    across: true
  }, core.jsx(button.Button, {
    type: "submit",
    weight: "bold",
    tone: "active"
  }, "Log reset link"), core.jsx(button.Button, {
    weight: "none",
    tone: "active",
    onClick: () => setMode('signin')
  }, "Go back")) : core.jsx(core.Stack, {
    gap: "medium",
    across: true
  }, core.jsx(button.Button, {
    weight: "bold",
    tone: "active",
    isLoading: loading$1 || // this is for while the page is loading but the mutation has finished successfully
    (data === null || data === void 0 ? void 0 : (_data$authenticate2 = data.authenticate) === null || _data$authenticate2 === void 0 ? void 0 : _data$authenticate2.__typename) === successTypename,
    type: "submit"
  }, "Sign In"))));
};

exports.SigninPage = SigninPage;
exports.getSigninPage = getSigninPage;
