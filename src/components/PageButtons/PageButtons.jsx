import Link from "next/link";

const PageButtons = ({ curr, total, url }) => {
    curr = parseInt(curr, 10);
    total = parseInt(total, 10);

    const buttons = []
    let flag = true

    for (let i = 1; i <= total; i++) {
        if (i == 1 || i == total || i == curr || i == curr - 1 || i == curr - 2 || i == curr + 1 || i == curr + 2) {
            if (flag == false) {
                buttons.push(<div key={-i} className="text-text flex items-end ">...</div>)
                flag = true
            }
            buttons.push(
                <Link
                    href={`/${url}/${i}`}
                    className={`episode-btn mx-2 ${(i == curr) && "episode-btn-active"}`}
                    key={i}>
                    {i}
                </Link>
            )
        } else {
            flag = false
        }
    }

    return buttons
};

export default PageButtons;
