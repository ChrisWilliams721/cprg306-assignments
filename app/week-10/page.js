"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return(
        <div>
            <h1 className="text-3xl font-bold mb-4 underline">Shopping List</h1>
            <p>{user ? "Signed in as " + user.email : 'Not signed in'}</p>
                <p>
                    {user ? (
                        <div>
                            <button onClick={firebaseSignOut}>Sign out</button> <br/>
                            <button onClick={() => window.location.href = '/week-9/shopping-list'}>continue to Shopping List</button>
                        </div>
                    ) : (
                        <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                    )}
                </p>
        </div>
    );
}