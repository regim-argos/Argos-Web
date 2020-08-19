import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import AuthContainer from 'components/AuthContainer';

import { confirmEmailPutRequest } from 'store/modules/auth/actions';

export default function ConfirmEmail() {
  const dispatch = useDispatch();
  const { hash } = useParams();

  const confirmEmailReq = useCallback(async () => {
    dispatch(confirmEmailPutRequest(hash));
  }, [dispatch, hash]);

  useEffect(() => {
    confirmEmailReq();
  }, [confirmEmailReq]);
  return (
    <>
      <AuthContainer>
        <span>Verificando Email...</span>
      </AuthContainer>
    </>
  );
}
