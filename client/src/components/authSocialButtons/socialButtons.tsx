import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { IResolveParams, LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import { signUpUser, getSavedArticles, logInUser } from '../redux/asyncActions';
import { TStore } from '../redux';
import { IAction, IProfile } from '../../shared/interfaces';
import { GG_APP_ID, FB_APP_ID } from '../../constants';
import './socialButtons.scss';

function SocialButtons({ action }: IAction): JSX.Element {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state: TStore) => state.user).user;
  const [profile, setProfile] = useState<IProfile>({ name: '', email: '' });

  const stylesBtn = { height: '35px', fontSize: '17px' };

  const handleLogin = useCallback((): void => {
    if (action === 'signUp' && profile.email) {
      signUpUser({ ...profile, phone: '', city: '', password: '' })(dispatch);
    }

    if (action === 'logIn' && profile.email) {
      logInUser({ email: profile.email }, 'socialLogin')(dispatch);
    }
  }, [action, dispatch, profile]);

  useEffect(() => {
    getSavedArticles(accessToken)(dispatch);
  }, [accessToken, dispatch]);

  useEffect(() => {
    handleLogin();
  }, [profile.email, handleLogin]);

  return (
    <div className="socialButtons">
      <LoginSocialFacebook
        appId={FB_APP_ID || ''}
        onResolve={({ data }: IResolveParams) => {
          data && setProfile({ name: data.name, email: data.email });
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton style={stylesBtn} />
      </LoginSocialFacebook>

      <LoginSocialGoogle
        client_id={GG_APP_ID || ''}
        onResolve={({ data }: IResolveParams) => {
          data && setProfile({ name: data.name, email: data.email });
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton style={stylesBtn} />
      </LoginSocialGoogle>
    </div>
  );
}

export default SocialButtons;
