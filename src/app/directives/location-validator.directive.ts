import { Directive } from "@angular/core";
import { FormGroup, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[validateLocation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})

export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } | null {
        const addressControl = formGroup.controls['address'];
        const city = formGroup.controls['city'];
        const country = formGroup.controls['country'];
        const onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && city && city.value && country && country.value) || (onlineUrl && onlineUrl.value))
            return null;
        else
            return { validateLocation: false };
    }

}