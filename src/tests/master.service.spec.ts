import { ValueService } from "app/core/value.service";
import { MasterService } from "app/core/master.service";

describe("demo of jasmine", () => {
  let masterService: MasterService;
  beforeEach(() => {});
  it("value returned from spy", () => {
    let valueServiceSpy = jasmine.createSpyObj("ValueService", ["getValue"]);
    const stubValue = 2;
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue()).toBe(stubValue);
  });
});
