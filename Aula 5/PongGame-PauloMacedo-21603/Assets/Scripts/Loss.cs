using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Loss : MonoBehaviour
{
    // Start is called before the first frame update
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("ballTag"))
        {
            GameObject.Find("ball").GetComponent<Ball>().Reset();
            GameObject.Find("gameManagerObj").GetComponent<Manager>().Reset();
            GameObject.Find("player1").GetComponent<Paddle>().Reset();
        }
    }
}
