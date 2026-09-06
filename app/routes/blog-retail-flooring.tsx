import { pageMeta } from '../seo';
import Page from '../../pages/BlogPost-RetailFlooring';

export const meta = () => pageMeta('blogRetailFlooring');

export default function Route() {
  return <Page />;
}
