import { pageMeta } from '../seo';
import Page from '../../pages/About';

export const meta = () => pageMeta('about');

export default function Route() {
  return <Page />;
}
