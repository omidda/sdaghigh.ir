import Header from "./Header";
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../ContextPC';

describe("Header component test suit",()=>{
  
  let mountedHeader : any;
  let title = "Sajad personal website";

  beforeAll(()=>{
    mountedHeader = shallow(
      <ThemeProvider >
        <Header title={title} />
        </ThemeProvider>);
  })

  it('Render header with menu', () => {

    let finedeMenu = mountedHeader.find("h1");

    expect(finedeMenu.text()).toEqual(title);
    
  });
 

})