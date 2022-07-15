import React from "react";
// @ts-ignore
const WebAccount = React.lazy(() => import('remote_account/Account'));

interface AccountProps {
    email: string
    token: string
}

function Account(accountProps: AccountProps) {
    return (
        <>
            <React.Suspense fallback={<>...</>}>
                <WebAccount email={accountProps.email} token={accountProps.token}/>
            </React.Suspense>
        </>
    )
}

export default Account
