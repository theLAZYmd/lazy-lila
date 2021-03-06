import Users, { Speed } from './endpoints/users';
import Profile from './endpoints/profile';
import Challenge from './endpoints/challenge';
/**
 * Creates a new instance of a JavaScript client for the Lichess API.
 * This client is almost entirely asynchronous and relies on the dependencies in package.json, with the most notable being {'request-promise'}
 * View {Collection} to see the properties of a collection.
 */
export default class Lichess {
    access_token?: string | undefined;
    constructor(access_token?: string | undefined);
    /**
     *
     * Lichess time controls are based on estimated game duration = (clock initial time) + 40 × (clock increment)
     * For instance, the estimated duration of a 5+3 game is 5 × 60 + 40 × 3 = 420 seconds.
     */
    static getTimeControlCategory(mins: number, increment: number): Speed;
    /**
     * Sets the client's Personal Access Token if one is supplied
     */
    setToken(access_token: string): this;
    /**
     * List of scopes "https://lichess.org/api#section/Authentication"}
     * @default {}
     * @typedef {scopeOptions}
     * @property {Boolean} 'game:read': @default false - Read game playing
     * @property {Boolean} 'preference:read' @default false -  Read your preferences
     * @property {Boolean} 'preference:write' @default false - Write your preferences
     * @property {Boolean} 'email:read' @default false - Read your email address
     * @property {Boolean} 'challenge:read' @default false - Read incoming challenges
     * @property {Boolean} 'challenge:write' @default false - Create, accept, decline challenges
     * @property {Boolean} 'tournament:write' @default false - Create tournaments
     * @property {Boolean} 'bot:play' @default false - Plays moves through the account, only available through bot accounts
     * @param {scopeOptions} scopes
     */
    /**
     * Sets the scopes for the authentication process
     * @default []
     * @param {scopeOptions} scopes
     */
    setScopes(scopes?: {}): this;
    /**
     * Resolves a promise when the OAuth process has completed. Useful for testing.
     * @name Lila#authentication
     * @example
     * //Gets the user endpoint only once authentication has been achieved
     * import lila from 'lazy-lila').setID(id).login(secret;
     *
     * (async () => {
     *  await lila.authentication();
     *  lila.users.get('theLAZYmd');    //Method is not called unless user logs in
     * })
     */
    get users(): Users;
    get profile(): Profile;
    get challenge(): Challenge;
}
export * from './interfaces';
//# sourceMappingURL=index.d.ts.map