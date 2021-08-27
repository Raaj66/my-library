import React from "react";
import { render,screen } from "@testing-library/react";
import IcnLink from "./IcnLink";
import { IcnLinkProps } from "./IcnLink.types";
import {MemoryRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
describe("IcnLink", () => {
  let props: IcnLinkProps;
  const mockHandleOnClick = jest.fn();
  beforeEach(() => {
    props = {
      href: "/some_Path",
      onClick:mockHandleOnClick
    };
  });
   test(' it renders with required props',()=>{
     props.isReactAppUrl=false;
     render(<IcnLink {...props}>Link to Subscription dashboard</IcnLink>);
     screen.getByText(/Link to Subscription dashboard/i);
     
   });
   test(' it renders correct href',()=>{
    props.isReactAppUrl=false;
    render(<IcnLink {...props}>Link to Subscription dashboard</IcnLink>);
    expect(screen.getByText(/Link to Subscription dashboard/i).closest('a')).toHaveAttribute('href', props.href);
   });
   test('it renders with required props with Link',()=>{
   
    props.isReactAppUrl=true;
    render(<IcnLink {...props}>Link to Subscription dashboard</IcnLink>, {wrapper: MemoryRouter})
    expect(screen.getByText(/Link to Subscription dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Link to Subscription dashboard/i).closest('a')).toHaveAttribute('href', props.href);
   });
   test('it should call function onClick',()=>{
      render(<IcnLink {...props}>Link to Subscription dashboard</IcnLink>);
      const link = screen.getByRole('link', { name: /Link to Subscription dashboard/i });
      userEvent.click(link);
      expect(mockHandleOnClick).toHaveBeenCalled();
      expect(mockHandleOnClick).toHaveBeenCalledTimes(1);
   })
});
