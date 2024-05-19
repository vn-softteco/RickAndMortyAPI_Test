import Header from "@/components/Header.tsx";

export const DefaultLayout = (props: {
    children: JSX.Element | null;
}): JSX.Element => (
    <>
        <Header />
        {props.children}
    </>
);
