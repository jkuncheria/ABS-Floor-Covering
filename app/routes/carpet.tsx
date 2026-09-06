import { pageMeta } from '../seo';
import Page from '../../pages/Carpet';

export const meta = () => pageMeta('carpet');

export default function Route() {
  return <Page />;
}
