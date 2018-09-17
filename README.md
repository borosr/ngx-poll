# 				ngx-poll

Simple polling component with two main options (yes/no) and one optional (stay). 

## Table of contents

[TOC]



## Installation instructions

Install `ngx-poll` from `npm`:

```bash
npm install ngx-poll --save
```

Add `PollModule ` to NgModule imports:

```typescript
import { PollModule } from 'ngx-poll';

@NgModule({
  // ...
  imports: [
      PollModule,
      // ...
  ]
  // ...
})
```

Add component to your page:

```html
<ngx-poll [questions]="questions"></ngx-poll>
```

You will need **ngx-bootstrap** configuration:

- Into your `index.html`

```html
<!--- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
```

- Into your `app.component.ts` 

```typescript
import { setTheme } from 'ngx-bootstrap/utils';

@Component({...})
export class AppComponent {
  constructor() {
    setTheme('bs4');
    // ...
  }
}
```

## Documentation

### @Inputs

|         Name         |              Type              | Default value |
| :------------------: | :----------------------------: | :-----------: |
|  primaryButtonTitle  |             string             |     'Yes'     |
|  primaryButtonValue  |              any               |     true      |
| secondaryButtonTitle |             string             |     'No'      |
| secondaryButtonValue |              any               |     false     |
|  submitButtonTitle   |             string             |    'Send'     |
| submitButtonEnabled  |            boolean             |     false     |
|      dataLoaded      |            boolean             |     true      |
|      questions       | [{ text: string, value: any }] |   undefined   |

### @Outputs

| Name | Type |           Emited           |
| :--: | :--: | :------------------------: |
| send | void | When submit button clicked |



## Example

The example project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

MIT