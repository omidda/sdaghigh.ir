import Header from "./Header";
import { shallow } from 'enzyme';
describe("Header component test suit",()=>{
  
  let mountedHeader : any;
  let title = "Sajad personal website";

  beforeAll(()=>{
    mountedHeader = shallow(<Header title={title} />);
  })

  it('Render header with menu', () => {

    let finedeMenu = mountedHeader.find("h1");

    expect(finedeMenu.text()).toEqual(title);
    
  });
 

})