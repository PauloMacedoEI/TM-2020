using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour
{
    // Start is called before the first frame update
    public float speed;
    public Rigidbody2D rb;

    private Vector3 startPosition;

    private float movement;
    void Start()
    {
        startPosition = transform.position; 
    }

    // Update is called once per frame
    void Update()
    {
        movement = Input.GetAxisRaw("Vertical");
        rb.velocity = new Vector2(rb.velocity.x, movement * speed);
    }

    public void Reset()
    {
        rb.velocity = Vector2.zero;
        transform.position = startPosition;
    }
}
