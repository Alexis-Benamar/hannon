import { TokenResponse } from '@react-oauth/google'

export type AuthResponse = Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>
