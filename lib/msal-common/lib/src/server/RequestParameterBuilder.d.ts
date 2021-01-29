import { ResponseMode } from "../utils/Constants";
import { ScopeSet } from "../request/ScopeSet";
import { StringDict } from "../utils/MsalTypes";
import { LibraryInfo } from "../config/ClientConfiguration";
export declare class RequestParameterBuilder {
    private parameters;
    constructor();
    /**
     * add response_type = code
     */
    addResponseTypeCode(): void;
    /**
     * add response_mode. defaults to query.
     * @param responseMode
     */
    addResponseMode(responseMode?: ResponseMode): void;
    /**
     * add scopes
     * @param scopeSet
     */
    addScopes(scopeSet: ScopeSet): void;
    /**
     * add clientId
     * @param clientId
     */
    addClientId(clientId: string): void;
    /**
     * add redirect_uri
     * @param redirectUri
     */
    addRedirectUri(redirectUri: string): void;
    /**
     * add domain_hint
     * @param domainHint
     */
    addDomainHint(domainHint: string): void;
    /**
     * add login_hint
     * @param loginHint
     */
    addLoginHint(loginHint: string): void;
    /**
     * add claims
     * @param claims
     */
    addClaims(claims: string): void;
    /**
     * add correlationId
     * @param correlationId
     */
    addCorrelationId(correlationId: string): void;
    /**
     * add library info query params
     * @param libraryInfo
     */
    addLibraryInfo(libraryInfo: LibraryInfo): void;
    /**
     * add prompt
     * @param prompt
     */
    addPrompt(prompt: string): void;
    /**
     * add state
     * @param state
     */
    addState(state: string): void;
    /**
     * add nonce
     * @param nonce
     */
    addNonce(nonce: string): void;
    /**
     * add code_challenge and code_challenge_method
     * - throw if either of them are not passed
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    addCodeChallengeParams(codeChallenge: string, codeChallengeMethod: string): void;
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    addAuthorizationCode(code: string): void;
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    addDeviceCode(code: string): void;
    /**
     * add the `refreshToken` passed by the user
     * @param refreshToken
     */
    addRefreshToken(refreshToken: string): void;
    /**
     * add the `code_verifier` passed by the user to exchange for a token
     * @param codeVerifier
     */
    addCodeVerifier(codeVerifier: string): void;
    /**
     * add client_secret
     * @param clientSecret
     */
    /**
     * add grant type
     * @param grantType
     */
    addGrantType(grantType: string): void;
    /**
     * add client info
     *
     */
    addClientInfo(): void;
    /**
     * add extraQueryParams
     * @param eQparams
     */
    addExtraQueryParameters(eQparams: StringDict): void;
    /**
     * Utility to create a URL from the params map
     */
    createQueryString(): string;
}