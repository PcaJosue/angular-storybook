import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { PureInboxScreenComponent } from './pure-inbox-scree.component';
import { TaskModule } from '../task.module';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from '../state/task.state';



export default {
    component: PureInboxScreenComponent,
    decorators: [
        moduleMetadata({
            declarations: [PureInboxScreenComponent],
            imports: [CommonModule, TaskModule, NgxsModule.forRoot([TasksState])],
            providers: [Store],
        }),
    ],
    title: 'PureInboxScreen',
} as Meta;

const Template: Story<PureInboxScreenComponent> = args => ({
    component: PureInboxScreenComponent,
    props: args,
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: true,
};