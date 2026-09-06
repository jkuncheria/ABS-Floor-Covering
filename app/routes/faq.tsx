import { pageMeta } from '../seo';
import Page from '../../pages/FAQ';

export const meta = () => pageMeta('faq');

export default function Route() {
  return <Page />;
}
