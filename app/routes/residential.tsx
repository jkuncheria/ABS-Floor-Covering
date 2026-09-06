import { pageMeta } from '../seo';
import Page from '../../pages/Residential';

export const meta = () => pageMeta('residential');

export default function Route() {
  return <Page />;
}
