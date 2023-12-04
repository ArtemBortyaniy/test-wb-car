import {
  HomeContainer,
  Heading,
  Paragraph,
  List,
  ListItem,
} from "./Home.styled";

const Home: React.FC = () => {
  return (
    <HomeContainer className="mainContainer">
      <Heading>Welcome to Our Car Rental Service</Heading>
      <Paragraph>
        Discover the freedom of the open road with our car rental service. At
        our website, we provide a seamless and convenient platform for renting
        the perfect vehicle for your needs.
      </Paragraph>
      <Paragraph>
        Whether you're planning a weekend getaway, a business trip, or simply
        need a reliable set of wheels, our extensive fleet of vehicles offers
        something for everyone. From sleek sedans to spacious SUVs, we've got
        the right car to match your style and requirements.
      </Paragraph>
      <Paragraph>Here's what our website has to offer:</Paragraph>
      <List>
        <ListItem>
          Wide Range of Vehicles: Explore our diverse selection of vehicles,
          including various makes, models, and types.
        </ListItem>
        <ListItem>
          Transparent Pricing: Enjoy clear and competitive pricing with no
          hidden fees.
        </ListItem>
        <ListItem>
          Flexible Rental Options: Choose from daily, weekly, or monthly rental
          plans to suit your schedule.
        </ListItem>
        <ListItem>
          Easy Reservation Process: Our user-friendly interface ensures a
          hassle-free reservation process.
        </ListItem>
        <ListItem>
          Detailed Information: Find comprehensive details about each vehicle,
          including features, rental conditions, and more.
        </ListItem>
        <ListItem>
          Favorites List: Create your favorites list by saving preferred
          vehicles for easy access.
        </ListItem>
      </List>
      <Paragraph>
        Start your journey with us and experience the convenience and
        flexibility of renting a car tailored to your preferences. Your
        adventure awaits!
      </Paragraph>
    </HomeContainer>
  );
};

export default Home;
