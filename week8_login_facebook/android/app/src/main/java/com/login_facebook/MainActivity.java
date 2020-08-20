package com.login_facebook;

import com.facebook.react.ReactActivity;
import com.facebook.FacebookSdk;//add d19.08
import com.facebook.appevents.AppEventsLogger;//add d19.08


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "login_facebook";
  }
}
