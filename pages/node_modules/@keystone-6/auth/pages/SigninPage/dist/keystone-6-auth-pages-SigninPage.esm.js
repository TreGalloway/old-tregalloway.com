import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import { useState, useRef, useEffect, Fragment } from 'react';
import { jsx, Center, Stack, H1, VisuallyHidden } from '@keystone-ui/core';
import { Button } from '@keystone-ui/button';
import { TextInput } from '@keystone-ui/fields';
import { Notice } from '@keystone-ui/notice';
import { gql, useMutation } from '@keystone-6/core/admin-ui/apollo';
import { useReinitContext, useRawKeystone } from '@keystone-6/core/admin-ui/context';
import { useRouter } from '@keystone-6/core/admin-ui/router';
import { LoadingDots } from '@keystone-ui/loading';
import { u as useRedirect, S as SigninContainer } from '../../../dist/useFromRedirect-cd014bce.esm.js';

const getSigninPage = props => () => jsx(SigninPage, props);
const SigninPage = _ref => {
  var _data$authenticate, _data$authenticate2;

  let {
    identityField,
    secretField,
    mutationName,
    successTypename,
    failureTypename
  } = _ref;
  const mutation = gql`
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
  const [mode, setMode] = useState('signin');
  const [state, setState] = useState({
    identity: '',
    secret: ''
  });
  const identityFieldRef = useRef(null);
  useEffect(() => {
    var _identityFieldRef$cur;

    (_identityFieldRef$cur = identityFieldRef.current) === null || _identityFieldRef$cur === void 0 ? void 0 : _identityFieldRef$cur.focus();
  }, [mode]);
  const [mutate, {
    error,
    loading,
    data
  }] = useMutation(mutation);
  const reinitContext = useReinitContext();
  const router = useRouter();
  const rawKeystone = useRawKeystone();
  const redirect = useRedirect(); // This useEffect specifically handles ending up on the signin page from a SPA navigation

  useEffect(() => {
    if (rawKeystone.authenticatedItem.state === 'authenticated') {
      router.push(redirect);
    }
  }, [rawKeystone.authenticatedItem, router, redirect]);

  if (rawKeystone.authenticatedItem.state === 'authenticated') {
    return jsx(Center, {
      fillView: true
    }, jsx(LoadingDots, {
      label: "Loading page",
      size: "large"
    }));
  }

  return jsx(SigninContainer, {
    title: "Keystone - Sign In"
  }, jsx(Stack, {
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
        router.push(redirect);
      }
    }
  }, jsx(H1, null, "Sign In"), error && jsx(Notice, {
    title: "Error",
    tone: "negative"
  }, error.message), (data === null || data === void 0 ? void 0 : (_data$authenticate = data.authenticate) === null || _data$authenticate === void 0 ? void 0 : _data$authenticate.__typename) === failureTypename && jsx(Notice, {
    title: "Error",
    tone: "negative"
  }, data === null || data === void 0 ? void 0 : data.authenticate.message), jsx(Stack, {
    gap: "medium"
  }, jsx(VisuallyHidden, {
    as: "label",
    htmlFor: "identity"
  }, identityField), jsx(TextInput, {
    id: "identity",
    name: "identity",
    value: state.identity,
    onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
      identity: e.target.value
    })),
    placeholder: identityField,
    ref: identityFieldRef
  }), mode === 'signin' && jsx(Fragment, null, jsx(VisuallyHidden, {
    as: "label",
    htmlFor: "password"
  }, secretField), jsx(TextInput, {
    id: "password",
    name: "password",
    value: state.secret,
    onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
      secret: e.target.value
    })),
    placeholder: secretField,
    type: "password"
  }))), mode === 'forgot password' ? jsx(Stack, {
    gap: "medium",
    across: true
  }, jsx(Button, {
    type: "submit",
    weight: "bold",
    tone: "active"
  }, "Log reset link"), jsx(Button, {
    weight: "none",
    tone: "active",
    onClick: () => setMode('signin')
  }, "Go back")) : jsx(Stack, {
    gap: "medium",
    across: true
  }, jsx(Button, {
    weight: "bold",
    tone: "active",
    isLoading: loading || // this is for while the page is loading but the mutation has finished successfully
    (data === null || data === void 0 ? void 0 : (_data$authenticate2 = data.authenticate) === null || _data$authenticate2 === void 0 ? void 0 : _data$authenticate2.__typename) === successTypename,
    type: "submit"
  }, "Sign In"))));
};

export { SigninPage, getSigninPage };
