import { pageMeta } from '../seo';
import Page from '../../pages/Blog';

export const meta = () => pageMeta('blog');

export default function Route() {
  return <Page />;
}
