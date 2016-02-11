package io.smartface.salestest;

import android.accounts.Account;
import android.app.Activity;
import android.util.Log;

import com.salesforce.androidsdk.accounts.UserAccountManager;
import com.salesforce.androidsdk.app.SalesforceSDKManager;
import com.salesforce.androidsdk.config.BootConfig;
import com.salesforce.androidsdk.rest.ClientManager;
import com.salesforce.androidsdk.rest.RestClient;
import com.salesforce.androidsdk.rest.RestRequest;
import com.salesforce.androidsdk.rest.RestResponse;
import com.salesforce.androidsdk.util.EventsObservable;

import org.apache.http.entity.StringEntity;
import org.apache.http.protocol.HTTP;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Iterator;

import io.smartface.plugin.SMFJSObject;

/**
 * Created on 09/11/15.
 *
 * @author Metehan Semiz
 * @author Olcay Ertaş
 */
public class SMFSFManager {

    public SMFJSObject smfJSObject = null;
    public String remoteAccessConsumerKey;
    public String oauthRedirectURI;
    public String[] oauthScopes;


    public RestClient myClient;


    /**
     * Default constructor.
     */
    public SMFSFManager() {
    }


    /**
     * @param activity
     */
    public void launch(final Activity activity) {

        // Show everything
        final SalesforceSDKManager salesforceSDKManager = SalesforceSDKManager.getInstance();
        String accountType = salesforceSDKManager.getAccountType();
        ClientManager.LoginOptions loginOptions = salesforceSDKManager.getLoginOptions();
        boolean shouldLogoutWhenTokenRevoked = salesforceSDKManager.shouldLogoutWhenTokenRevoked();

        // Gets a rest client.
        ClientManager clientManager =
                new ClientManager(
                        activity,
                        accountType,
                        loginOptions,
                        shouldLogoutWhenTokenRevoked);

        clientManager.getRestClient(activity, new ClientManager.RestClientCallback() {

            @Override
            public void authenticatedRestClient(RestClient client) {
                if (client == null) {
                    salesforceSDKManager.logout(activity);
                    Log.e("mypluggg", "Login Fail 1");
                    // Fail messsage
                    try {
                        SMFJSObject func = smfJSObject.getProperty("SMFLaunchErrorAction");
                        Log.e("mypluggg", "login fail toString:" + func.toString());
                        SMFJSObject[] params = new SMFJSObject[1];
                        JSONObject obj = new JSONObject();
                        obj.put("result", "fail");
                        params[0] = new SMFJSObject(obj);
                        func.callAsFunction(smfJSObject, params);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    return;
                }

                myClient = client;
                Log.e("mypluggg", "Login Success 1");

                // SUCCESS
                try {
                    SMFJSObject func = smfJSObject.getProperty("SMFPostLaunchAction");
                    Log.e("mypluggg", "Login Success toString:" + func.toString());
                    SMFJSObject[] params = new SMFJSObject[1];
                    JSONObject obj = new JSONObject();
                    obj.put("result", "success");
                    params[0] = new SMFJSObject(obj);
                    func.callAsFunction(smfJSObject, params);
                } catch (Exception e) {
                    e.printStackTrace();
                }

                // Lets observers know that rendition is complete.
                EventsObservable.get().notifyEvent(EventsObservable.EventType.RenditionComplete);
            }
        });
    }


    /**
     * @param activity
     */
    public void logout(Activity activity) {

        try {
            SalesforceSDKManager salesforceSDKManager = SalesforceSDKManager.getInstance();
            UserAccountManager userAccountManager = salesforceSDKManager.getUserAccountManager();
            Account currentAccount = userAccountManager.getCurrentAccount();
            salesforceSDKManager.logout(currentAccount, activity, false);
            Log.e("mypluggg", "Logout Success 1");
            // SUCCESS
            try {
                SMFJSObject func = smfJSObject.getProperty("SMFPostLogoutAction");
                Log.e("mypluggg", "logout Success toString:" + func.toString());
                SMFJSObject[] params = new SMFJSObject[1];
                JSONObject obj = new JSONObject();
                obj.put("result", "success");
                params[0] = new SMFJSObject(obj);
                func.callAsFunction(smfJSObject, params);
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            Log.e("mypluggg", "Logout Faill 1");
            // Fail messsage
            try {
                SMFJSObject func = smfJSObject.getProperty("SMFLogoutErrorAction");
                Log.e("mypluggg", "logout fail toString:" + func.toString());
                SMFJSObject[] params = new SMFJSObject[1];
                JSONObject obj = new JSONObject();
                obj.put("result", "fail");
                params[0] = new SMFJSObject(obj);
                func.callAsFunction(smfJSObject, params);
            } catch (Exception e1) {
                e1.printStackTrace();
            }
        }
    }


    /**
     * @return
     */
    public String getConnectedAppCallbackUri() {
        return oauthRedirectURI;
    }


    /**
     * @param oauthRedirectURI
     */
    public void setConnectedAppCallbackUri(String oauthRedirectURI) {
        this.oauthRedirectURI = oauthRedirectURI;
        BootConfig.oauthRedirectURIT = oauthRedirectURI;
    }


    /**
     * @return
     */
    public String[] getAuthScopes() {
        return oauthScopes;
    }


    /**
     * @param oauthScopes
     */
    public void setAuthScopes(String[] oauthScopes) {
        this.oauthScopes = oauthScopes;
        BootConfig.oauthScopesT = oauthScopes;
    }


    /**
     * @return
     */
    public String getConnectedAppId() {
        return remoteAccessConsumerKey;
    }


    /**
     * @param remoteAccessConsumerKey
     */
    public void setConnectedAppId(String remoteAccessConsumerKey) {
        this.remoteAccessConsumerKey = remoteAccessConsumerKey;
        BootConfig.remoteAccessConsumerKeyT = remoteAccessConsumerKey;
    }


    /**
     * @param arr
     */
    public void RequestSendString(String arr) {

        Log.e("mypluggg", arr);
        // SUCCESS
        try {
            SMFJSObject func = smfJSObject.getProperty("onSuccess");
            Log.e("mypluggg", "RequestSendString onSuccess:" + func.toString());
            SMFJSObject[] params = new SMFJSObject[1];
            params[0] = new SMFJSObject(arr);
            func.callAsFunction(smfJSObject, params);
        } catch (Exception e) {
            // FAIL
            try {
                SMFJSObject func = smfJSObject.getProperty("onFail");
                Log.e("mypluggg", "RequestSendString onFail:" + func.toString());
                SMFJSObject[] params = new SMFJSObject[1];
                JSONObject obj = new JSONObject();
                obj.put("result", "fail");
                params[0] = new SMFJSObject(obj);
                func.callAsFunction(smfJSObject, params);
            } catch (Exception e1) {
                e1.printStackTrace();
            }
            e.printStackTrace();
        }
    }


    /**
     * @param query
     */
    public void requestForQuery(String query) {

        RestRequest restRequest = null;
        try {
            restRequest = RestRequest.getRequestForQuery("v33.0", query);
        } catch (UnsupportedEncodingException e) {

            // FAIL
            try {
                SMFJSObject func = smfJSObject.getProperty("onFail");
                Log.e("mypluggg", "requestForQuery fail toString:" + func.toString());
                SMFJSObject[] params = new SMFJSObject[1];
                JSONObject obj = new JSONObject();
                obj.put("result", "fail");
                params[0] = new SMFJSObject(obj);
                func.callAsFunction(smfJSObject, params);
            } catch (Exception e1) {
                e1.printStackTrace();
            }

            e.printStackTrace();
        }


        this.myClient.sendAsync(restRequest, new RestClient.AsyncRequestCallback() {
            @Override
            public void onSuccess(RestRequest request, RestResponse result) {
                try {

                    RequestSendString(result.asJSONObject().getJSONArray("records").toString());

                } catch (Exception e) {
                    // FAIL
                    try {
                        SMFJSObject func = smfJSObject.getProperty("onFail");
                        Log.e("mypluggg", "requestForQuery fail 2 toString:" + func.toString());
                        SMFJSObject[] params = new SMFJSObject[1];
                        JSONObject obj = new JSONObject();
                        obj.put("result", "fail");
                        params[0] = new SMFJSObject(obj);
                        func.callAsFunction(smfJSObject, params);
                    } catch (Exception e1) {
                        e1.printStackTrace();
                    }

                    onError(e);
                }
            }

            @Override
            public void onError(Exception exception) {
                // FAIL
                try {
                    SMFJSObject func = smfJSObject.getProperty("onFail");
                    Log.e("mypluggg", "requestForQuery fail 3 toString:" + func.toString());
                    SMFJSObject[] params = new SMFJSObject[1];
                    JSONObject obj = new JSONObject();
                    obj.put("result", "fail");
                    params[0] = new SMFJSObject(obj);
                    func.callAsFunction(smfJSObject, params);
                } catch (Exception e1) {
                    e1.printStackTrace();
                }
            }
        });

    }


    /**
     * @param _method
     * @param _path
     * @param _requestEntity
     */
    public void requestForRest(int _method, String _path, String _requestEntity) {

        StringEntity entity = null;
        StringBuilder sb = new StringBuilder();
        Log.e("mypluggg", "requestForRest girdi");
        Log.e("mypluggg", "PATH: " + _path + "  params: " + _requestEntity);

        try {
            if (_requestEntity != null) {
                if (_method != 0) {
                    Log.e("mypluggg", _requestEntity);
                    entity = new StringEntity(_requestEntity, HTTP.UTF_8);
                    entity.setContentType("application/json");

                } else {
                    Log.e("mypluggg - GETT", _requestEntity);
                    JSONObject json = new JSONObject(_requestEntity);
                    Iterator<String> keys = json.keys();
                    sb.append("?"); //start of query args
                    while (keys.hasNext()) {
                        String key = keys.next();
                        sb.append(URLEncoder.encode(key, "UTF-8"));
                        sb.append("=");
                        sb.append(URLEncoder.encode(json.get(key).toString(), "UTF-8"));
                        sb.append("&"); //To allow for another argument.
                    }
                    sb.deleteCharAt(sb.toString().length() - 1);
                    Log.e("mypluggg", "-- : -- " + sb.toString());
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        RestRequest restRequest = new RestRequest(RestRequest.getMethod(_method), (_path + sb), entity);

        this.myClient.sendAsync(restRequest, new RestClient.AsyncRequestCallback() {
            @Override
            public void onSuccess(RestRequest request, RestResponse result) {
                try {
                    Log.e("mypluggg", "requestForRest gönderdi : " + result.toString());
                    RequestSendString(result.toString());
                } catch (Exception e) {
                    Log.e("mypluggg", "requestForRest fail 1");
                    // FAIL
                    try {
                        SMFJSObject func = smfJSObject.getProperty("onFail");
                        Log.e("mypluggg", "requestForRest fail toString:" + func.toString());
                        SMFJSObject[] params = new SMFJSObject[1];
                        JSONObject obj = new JSONObject();
                        obj.put("result", "fail");
                        params[0] = new SMFJSObject(obj);
                        func.callAsFunction(smfJSObject, params);
                    } catch (Exception e1) {
                        e1.printStackTrace();
                    }
                    onError(e);
                }
            }

            @Override
            public void onError(Exception exception) {
                Log.e("mypluggg", "requestForRest fail 2");
                // FAIL
                try {
                    SMFJSObject func = smfJSObject.getProperty("onFail");
                    Log.e("mypluggg", "requestForRest fail 2 toString:" + func.toString());
                    SMFJSObject[] params = new SMFJSObject[1];
                    JSONObject obj = new JSONObject();
                    obj.put("result", "fail");
                    params[0] = new SMFJSObject(obj);
                    func.callAsFunction(smfJSObject, params);
                } catch (Exception e1) {
                    e1.printStackTrace();
                }
                exception.printStackTrace();
            }
        });
    }
}
