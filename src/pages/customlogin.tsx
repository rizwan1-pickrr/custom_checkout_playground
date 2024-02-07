import { Inter } from "next/font/google";
import { useState } from "react";
import ScriptLoader from "./scriptloader";
import { fetchToken } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export default function CustomLogin({ env, ak, as }: any) {
  const [error, setError] = useState('');
  const [uiJson, setUiJson] = useState('{"amount": 100.0}');
  const [tokenJson, setTokenJson] = useState('{"address": true, "timestamp": "$cur_date_time"}');
  return (
    <div className="m-2 flex flex-col">
      <ScriptLoader {...{ env }} />
      <div className="pb-5">
        <h2 className="text-xl mb-1">UI Config</h2>
        <textarea className="w-4/12" value={uiJson} onChange={(e) => setUiJson(e.target.value)}/>
      </div>
      <div className="pb-5">
        <h2 className="text-xl mb-1">Access Token Data</h2>
        <textarea className="w-5/12" value={tokenJson} onChange={(e) => setTokenJson(e.target.value)}/>
      </div>
      <button className="btn btn-blue w-36" onClick={async (e) => {
        setError('');
        if (!ak || !as) {
          setError("Please set Api Key and/or Secret in top bar first.");
          return;
        }
        try {
          const object = JSON.parse(uiJson);
          const fn = (window as any)?.HeadlessCheckout?.buyNow;
          const token = await fetchToken(env, "login_token", tokenJson, ak, as);
          fn(e, token, object, (response: any) => {
            console.log(response, 'checking reponse');
          });
        } catch (ex: any) {
          setError(ex.toString());
        }
      }}>Custom Login</button>
      <h1 className="text-xl text-red-500 ml-3">
        {error}
      </h1>
    </div>
  );
}
