import { render, screen } from "@testing-library/react";
import ProfilePicture from "./ProfilePicture";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: (props: any) => <img {...props} />,
}));

describe("ProfilePicture", () => {
  it("should render with the provided imageLink if it is provided", () => {
    const imageLink = "https://example.com/profile-image.jpg";
    render(<ProfilePicture imageLink={imageLink} />);
    const profileImage = screen.getByAltText("Default user");

    expect(profileImage).toBeDefined();
    expect(profileImage.getAttribute("src")).toBe(imageLink);
  });
});
