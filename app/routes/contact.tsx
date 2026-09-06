import { pageMeta } from '../seo';
import Page from '../../pages/Contact';

export const meta = () => pageMeta('contact');

export default function Route() {
  return <Page />;
}
