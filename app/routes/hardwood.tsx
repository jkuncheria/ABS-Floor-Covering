import { pageMeta } from '../seo';
import Page from '../../pages/Hardwood';

export const meta = () => pageMeta('hardwood');

export default function Route() {
  return <Page />;
}
