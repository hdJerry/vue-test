import { mount, shallowMount } from '@vue/test-utils';
import Chat from './Chat.vue';

describe('Chat Service', () => {

    let wrapper = null;

    beforeEach(async () => {
        wrapper = mount(Chat, {
            propsData: {}
        });
    });

    it('should match the snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
    });

    it('should have a list item for every message in the props', () => {
        
        const shallowWrapper = shallowMount(Chat, {
            propsData: {
                messages: [
                    {content: 'Hello'},
                    {content: 'world'},
                ]
            }
        });

        expect(shallowWrapper.findAll('.message_display')).toHaveLength(2);

    });
    
    
    
});
