import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
}

/**
 * Card component with subtle gradient background and optional hover effect
 */
const Card = ({ children, hover = true }: CardProps) => {
  return (
    <div className={`card w-full border border-rounded border-accent-metallic-dark ${hover ? '' : 'hover:transform-none'}`}>
      {children}
    </div>
  );
};

/**
 * Card title component with brand styling
 */
const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="card-title text-xl font-medium leading-none tracking-tight text-accent-metallic-light">
      {children}
    </h2>
  );
};

/**
 * Card description component with brand styling
 */
const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-accent-metallic text-sm">{children}</div>
  );
};

/**
 * Card header section
 */
const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-2 flex-col">{children}</div>;
};

/**
 * Card body section with proper padding and spacing
 */
const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-body gap-4 p-6">{children}</div>;
};

/**
 * Card footer section with subtle border
 */
const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card-actions justify-end p-4 border-t border-accent-metallic-dark bg-bg-secondary rounded-b-lg">
      {children}
    </div>
  );
};

Card.Body = Body;
Card.Title = Title;
Card.Description = Description;
Card.Header = Header;
Card.Footer = Footer;

export default Card;
