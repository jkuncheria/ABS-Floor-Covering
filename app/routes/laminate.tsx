import { pageMeta } from '../seo';
import Page from '../../pages/Laminate';

export const meta = () => pageMeta('laminate');

export default function Route() {
  return <Page />;
}
