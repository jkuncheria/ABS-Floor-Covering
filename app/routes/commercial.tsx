import { pageMeta } from '../seo';
import Page from '../../pages/Commercial';

export const meta = () => pageMeta('commercial');

export default function Route() {
  return <Page />;
}
