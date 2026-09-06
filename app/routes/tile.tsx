import { pageMeta } from '../seo';
import Page from '../../pages/Tile';

export const meta = () => pageMeta('tile');

export default function Route() {
  return <Page />;
}
