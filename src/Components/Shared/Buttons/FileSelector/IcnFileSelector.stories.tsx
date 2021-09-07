/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { IcnFileSelector, ButtonSize } from "..";
import FieldDecorator from "../../../../stories/lib/FieldDecorator";

storiesOf("Components/Buttons/ICN File Selector", module)
  .addDecorator(FieldDecorator)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <IcnFileSelector
      onFileSelected={action("fileSelected")}
      text={text("Text", "Select File")}
      accept={text("Accept", "*")}
      size={select("Button Size", ButtonSize, ButtonSize.Large)}
      disabled={boolean("Disabled", false)}
    />
  ));
