import { LightSwitchComponent } from "app/component/light-switch.component"

describe('testing the component',()=>{
    let lightComponent : LightSwitchComponent;
    beforeEach(()=>{
        lightComponent = new LightSwitchComponent();
    })  
    it('check v1',()=>{
        expect(lightComponent.isOn).withContext('off at first').toBe(false);
    })
})