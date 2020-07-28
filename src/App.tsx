import Link from "./component/Link";
import { css } from "emotion";

export interface IAppProps {
    name: string;
}

export default function App(props: IAppProps) {
    const { name } = props;

    const styles = {
        title: css({
            textAlign: "center",
            padding: "1em",
            maxWidth: "240px",
            margin: "0 auto"
        }),
        text: css({
            color: "#ff3e00",
            textTransform: "uppercase",
            fontSize: "4em",
            fontWeight: "lighter"
        })
    };

    <main class={styles.title}>
        <h1 class={styles.text}>Hello {name}!</h1>
        <p>Visit the <Link url="https://svelte.dev/tutorial" text="Svelte tutorial" /> to learn how to build Svelte apps.</p>
    </main>
}