import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import mockFetch from 'jest-fetch-mock';

mockFetch.enableMocks();

configure({ adapter: new Adapter() });
