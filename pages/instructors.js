export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/about-us#instructors",
      permanent: true,
    },
  };
}

export default function InstructorsRedirect() {
  return null;
}
