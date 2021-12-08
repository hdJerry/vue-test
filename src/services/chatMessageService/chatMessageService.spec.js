import { ChatMessageService } from ".";

// jest.mock('.');
describe("the Chat Message Service", () => {
    let chatService;

    // it.todo("should return an array of messages");

    beforeEach(() => {
        chatService = ChatMessageService([]);
    })
    it('should have no message', async () => {
        expect(await chatService.getMessages()).toHaveLength(0);
    });
    
    it('should add message', async () => {
        let message = {
            content: 'This is vue Test',
            sender: 'You'
        };
        await chatService.submitMessage(message);
        expect(await chatService.getMessages()).toHaveLength(1);
        let messages = await chatService.getMessages();
        expect(messages[0].content).toEqual(message.content);
    });


    
});