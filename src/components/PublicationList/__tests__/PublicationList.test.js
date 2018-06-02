import React from 'react';
import { shallow } from 'enzyme';

import PublicationList from '../PublicationList';
import { PublicationCard } from '../../PublicationCard';

describe('PublicationList', () => {
    describe('rendering', () => {
        const props = {
            publications: [{
                id: 1,
                title: 'Test publication 1',
                text: 'Test publication text 1'
            }, {
                id: 2,
                title: 'Test publication 2',
                text: 'Test publication text 2'
            }, {
                id: 3,
                title: 'Test publication 3',
                text: 'Test publication text 3'
            }]
        }

        it('should render', () => {
            const wrapper = shallow(<PublicationList {...props} />);

            expect(wrapper.exists()).toBe(true);
        });

        it('should render publications', () => {
            const wrapper = shallow(<PublicationList {...props} />);
            const listWrapper = wrapper.dive();

            expect(listWrapper.find(PublicationCard).length).toBe(3);
        });
    })
});
