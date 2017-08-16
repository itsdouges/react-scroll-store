import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import createScrollStore from './';

describe('createScrollStore()', () => {
  const RestoreScrollOnMount = createScrollStore();

  const App = (props) => (
    <div>
      {props.show && <RestoreScrollOnMount />}
    </div>
  );

  App.propTypes = {
    show: PropTypes.bool,
  };

  it('should store scroll position on unmount and then set it on mount', () => {
    const spy = sinon.spy(window, 'scrollTo');
    document.body.scrollTop = 500;

    const wrapper = mount(<App show />);
    wrapper.setProps({ show: false });
    wrapper.setProps({ show: true });


    expect(spy).to.have.been.calledWith(0, 500);

    spy.reset();
  });
});
