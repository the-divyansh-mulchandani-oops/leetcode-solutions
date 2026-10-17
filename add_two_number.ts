
function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return dummy.next;
}

// linked list (data, and next pointer)'s struct
