import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/AppToTest'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App />', () => {
    it('should render App', () => {
        const wrapper = shallow(<App />)
        console.log(wrapper.debug())
    })
})