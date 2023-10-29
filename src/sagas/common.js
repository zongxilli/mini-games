import { toast } from 'react-toastify';

export const getThemeState = (state) => state.theme;

export function handleGenericError(action, error) {
  toast(error);
}
